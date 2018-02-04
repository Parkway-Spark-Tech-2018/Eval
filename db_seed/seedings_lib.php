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
      print_r ($insertsql->fetchAll());

      $conn->commit();

    } catch (Exception $e) {
      $conn->rollBack();
      echo $e->getMessage();
    }

  }

  function viewTeachers($conn) {

    $sql = "SELECT * FROM eval_db.Staff";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            print_r ($row);
        }
    } else {
        echo "0 results";
    }

  }

  function viewDepartments($conn) {
    $sql = "SELECT * FROM eval_db.Department";
    $result = $conn->query($sql);

  }


 ?>
