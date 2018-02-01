<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class TeacherController extends Controller
{
    /**
     * @Route("/teacher", name="teacher")
     */
    public function index()
    {
        return new Response('Welcome to your new controller!');
    }

    public function show()
    {
      $conn = $this->getDoctrine()->getEntityManager()->getConnection();

      $sql = 'SELECT * FROM Staff';

      $stmt = $conn->prepare($sql);
      $stmt->execute();

      $results = $stmt->fetchAll();

      return new JsonResponse($results);

    }

}
