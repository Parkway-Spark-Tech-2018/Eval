<?php

  $pdo = new PDO('mysql:localhost', 'root', 'test');
  $seeder = new \tebazil\dbseeder\Seeder($pdo);

  $teachers_json = file_get_contents("teachers.json");
  $teachers = json_decode($teachers_json, true)["Sheet1"];

  $courses_json = file_get_contents("courses.json");
  $courses = json_decode($courses_json, true);

  $departments_json = file_get_contents("departments.json");
  $departments = json_decode($departments_json, true)["Sheet1"];

  //print_r ($teachers);

  //print_r($courses);

  //print_r($departments);





 ?>
