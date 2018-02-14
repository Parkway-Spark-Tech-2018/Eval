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


        ##

        return new JsonResponse($form_data);
      }else {
        return new JsonResponse($err);
      }

    }


}
