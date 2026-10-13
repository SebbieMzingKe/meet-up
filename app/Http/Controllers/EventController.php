<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::query()
        ->with(['meetupGroup.user'])
        ->where('starts_at', '>=', now())
        ->orderBy('starts_at')
        ->get();

        return Inertia::render('events/index', [
            'events' => $events,
        ]);
    }

    public function show(Event $event): Response
    {
        $event->load('meetupGroup.user');
        return Inertia::render('events/show', [
            'event' => $event,
        ]);
    }
}
