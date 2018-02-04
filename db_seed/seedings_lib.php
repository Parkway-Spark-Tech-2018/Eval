<?php

  function addDepartment($conn, $department) {
    try {

      $conn->beginTransaction();
      $insertsql = $conn->prepare("INSERT INTO eval_db.Department (Department_Id, Department_Name, Department_Description, School_Id) VALUES (:id, :name, '', 2)");

      //Bind the params

      $insertsql->bindValue(":id", $department["Department Id"]);
      $insertsql->bindValue(":name", $department["Department Name"]);

      $insertsql->execute();

      $conn->commit();

    } catch (Exception $e) {
      $conn->rollBack();
      echo $e->getMessage();
    }
  }

  function addCourse($conn, $course) {
    try {
      $conn->beginTransaction();
      $insertsql = $conn->prepare("INSERT INTO eval_db.Course (Course_Name, Course_Description, Department_Id, Entry_Grade, Exit_Grade, Credit) VALUES (:name, 'none', :department_id, :entry_grade, :exit_grade, :credit)");

      $insertsql->bindValue(":name", $course["Course Name"]);
      $insertsql->bindValue(":department_id", $course["Department Id"]);
      $insertsql->bindValue(":entry_grade", $course["entry grade"]);
      $insertsql->bindValue(":exit_grade", $course["max grade"]);
      $insertsql->bindValue(":credit", $course["Credit Value"]);

      $insertsql->execute();

      $conn->commit();

    } catch (Exception $e) {
      $conn->rollBack();
      echo $e->getMessage();
    }

  }


  function addTeacher($conn, $teacher) {
    try {
      $conn->beginTransaction();
      $insertsql = $conn->prepare("INSERT INTO eval_db.Staff (Last_Name, First_Name, Prefix, Email, Department_Id, Password) VALUES (:lastname, :firstname, :prefix, :email, :department_id, 'changeme')");

      //Bind the params
      $insertsql->bindValue(":lastname", $teacher["Last Name"]);
      $insertsql->bindValue(":firstname", $teacher["First Name"]);
      $insertsql->bindValue(":prefix", $teacher["Prefix"]);
      $insertsql->bindValue(":email", $teacher["Teacher Emails"]);
      $insertsql->bindValue(":department_id", $teacher["Department Id"]);

      $insertsql->execute();

      $conn->commit();

    } catch (Exception $e) {
      $conn->rollBack();
      echo $e->getMessage();
    }

  }


  function viewCourses($conn) {
    try {
        $stmt = $conn->prepare("SELECT * FROM eval_db.Course");
        $stmt->execute();

        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        print_r ($stmt->fetchAll());
    }
    catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
  }

  function viewTeachers($conn) {

    try {
        $stmt = $conn->prepare("SELECT * FROM eval_db.Staff");
        $stmt->execute();

        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        print_r ($stmt->fetchAll());
    }
    catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

  }

  function viewDepartments($conn) {
    try {
        $stmt = $conn->prepare("SELECT * FROM eval_db.Department");
        $stmt->execute();

        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        print_r ($stmt->fetchAll());
    }
    catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

  }


 ?>
