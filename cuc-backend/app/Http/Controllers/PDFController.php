<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Mpdf\Mpdf as PDF;
use Mpdf\MpdfException;


class PDFController extends Controller
{
    /**
     * @throws MpdfException
     */
    public function index(Request $request)
    {
        $mpdf = new PDF(['mode' => 'utf-8', 'format' => 'A4-P','margin_top'=>'20']);
        $mpdf->SetHTMLHeader(view('pdf.header')->render());
        $mpdf->setFooter('{PAGENO}');
        $date = date('Y-m-d');
        if($request->date != ''){
            $date = $request->date;
        }
        $bookings = Booking::where('booking_date',$date)->with(['getLaboratory','getUserLab'])->get();
        $mpdf->WriteHTML(view('pdf.content',compact('date','bookings'))->render());


        $mpdf->Output('nuevo archivo.pdf', 'I');
    }
}
