import type { CollectionConfig } from 'payload'

const Bookings: CollectionConfig = {
  slug: 'bookings',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  timestamps: true,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'test',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'startDate',
          label: 'Start',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
              displayFormat: 'dd.MM.yyyy HH:mm',
              timeFormat: 'HH:mm',
            },
          },
        },
        {
          name: 'endDate',
          label: 'Ende',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
              displayFormat: 'dd.MM.yyyy HH:mm',
              timeFormat: 'HH:mm',
            },
          },
        },
      ],
    },
  ],
}

export default Bookings
