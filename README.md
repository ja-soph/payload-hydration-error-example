# Reproduction of hydration error using payload cms

Try adding a booking, with its dates, view all entries of bookings in the list view, while having a Timezone set in
the .env which does not match the one in your browser, and watch for the Hydration error.

This does not only occur for any "Date Field", but also for CreatedAt & UpdatedAt, when selected via columns.

## Evironment Info

- payload: 3.8.0
- next: 15.1.1
- Node: 20.9.0

### Timezone difference

The timezone I am in is in Europe, and need to force the app to use UTC via env

## Attributes

- **Database**: mongodb
- **Storage Adapter**: localDisk
