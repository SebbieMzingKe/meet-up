import { Head, Link } from '@inertiajs/react';
import EventCard from '@/components/event-card';
import { create, show } from '@/routes/events';
import type { Event } from '@/types';

interface Props {
    events: Event[];
    canCreateEvent: boolean;
}

export default function EventsIndex({ events, canCreateEvent }: Props) {
    return (
        <>
            <Head title="Upcoming Events" />

            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Upcoming Events</h1>

                { canCreateEvent && <Link href={create.url()}>create event</Link>}
            </div>

            <div className="space-y-4">
                {events.map((event) => (
                    <EventCard key={event.id} event={event}/>
                    // <div key={event.id}>
                    //     <h2>{event.title}</h2>
                    //     <p>{event.location}</p>

                    // </div>
                ))}
            </div>
        </>
    );
}