<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;


class ReviewController extends Controller
{

    public function index()
    {
        return new Response('Welcome to your new controller!');
    }

    public function show() {

      $conn = $this->getDoctrine()->getEntityManager()->getConnection();

      $sql = 'SELECT * FROM GenReview';

      $stmt = $conn->prepare($sql);
      $stmt->execute();

      $results = $stmt->fetchAll();

      return new JsonResponse($results);

    }

    public function new() {

      $request = Request::createFromGlobals();

      $method = $request->getMethod();

      $arr = array (
        "status" => "good"
      );

      $err = array (
        "status" => "404"
      );

      if ($method == "POST") {
        $form_data = json_decode(file_get_contents('php://input'), true);


        ## TODO Implement Review Creation here pls

        if (isset($form_data["approval"]) && isset($form_data["explanation"]) && isset($form_data["review_type"]) && isset($form_data["Subject_Id"])){
          $approval = $form_data["approval"];
          $explanation = $form_data["explanation"];
          $review_type = $form_data["review_type"];
          $subject_id = $form_data["Subject_Id"];

          $conn = $this->getDoctrine()->getEntityManager()->getConnection();

          try {
            $conn->beginTransaction();

            $sql = 'INSERT INTO GenReview (Approval, Explanation, Subject_Id, review_type) VALUES
              (:approval, :explanation, :subject_id, :review_type)';

            $insertsql = $conn->prepare($sql);
            $insertsql->bindValue(':approval', $approval);
            $insertsql->bindValue(':explanation', $explanation);
            $insertsql->bindValue(':review_type', $review_type);
            $insertsql->bindValue(':subject_id', $subject_id);

            $insertsql->execute();

            $conn->commit();

            return $this->show();

          }catch (Exception $e) {
            $conn->rollBack();
            echo $e->getMessage();

            return new JsonResponse($err);

          }

        }else {
          return new JsonResponse($err);
        }

      }else {
        return new JsonResponse($err);
      }

    }


}
