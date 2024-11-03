<style>
    .tabla{
        width: 100%;
    }
    .celTitle{
        padding: 6px;
        font-weight: bold;
    }
    .titlespan{
        font-weight: bold;
    }
</style>
<h3>Reserva de laboratorios {{$date}}</h3>
@foreach($bookings as $item)
    <table class="tabla">
        <tr>
            <td class="celTitle">{{$item->getLaboratory->name}}  </td>
            <td>Piso {{$item->getLaboratory->flat}}</td>
        </tr>
        <tr>
            <td><span class="titlespan">Hora de inicio:</span> {{ $item->booking_time_start }} </td>
            <td><span class="titlespan">Hora de termino:</span> {{ $item->booking_time_end }}</td>
        </tr>
        <tr>
            <td colspan="2"><span class="titlespan">Reservado Por: </span> {{$item->getUserLab->getCustomer->name}} </td>

        </tr>
        <tr>
            <td colspan="2">
                <div class="titlespan">Motivo:</div>
                <div>{{$item->reason}}</div>
            </td>

        </tr>
    </table>
    <br>
@endforeach


