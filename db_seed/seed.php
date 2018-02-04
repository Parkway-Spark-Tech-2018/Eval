<?php

  include("seedings_lib.php");

  $conn = (include("seed_conn.php"));
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

  $teachers_json = file_get_contents("teachers.json");
  $teachers = json_decode($teachers_json, true)["Sheet1"];

  $courses_json = file_get_contents("courses.json");
  $courses = json_decode($courses_json, true);

  $departments_json = file_get_contents("departments.json");
  $departments = json_decode($departments_json, true)["Sheet1"];

  //print_r ($teachers);

  //print_r($courses);

  foreach ($departments as $department) {
    addDepartment($conn, $department);
  }

  foreach ($teachers as $teacher) {
    addTeacher($conn, $teacher);
  }

  foreach ($courses as $course) {
    addCourse($conn, $course);
  }

  viewTeachers($conn);
  viewDepartments($conn);
  viewCourses($conn);

 ?>
