<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class DepartmentController extends Controller
{
    /**
     * @Route("/department", name="department")
     */
    public function index()
    {
        return new Response('Welcome to your new controller!');
    }

    public function get(string $id)
    {
      $conn = $this->getDoctrine()->getEntityManager()->getConnection();

      $sql = 'SELECT * FROM Department WHERE Department_Id = ' . $id;

      $stmt = $conn->prepare($sql);
      $stmt->execute();

      $results = $stmt->fetchAll();

      if (count($results) > 0) {
        return new JsonResponse($results[0]);
      }else {

        $err_message = array(
          "error" => "department does not exist"
        );

        return new JsonResponse($err_message);
      }



    }
}
