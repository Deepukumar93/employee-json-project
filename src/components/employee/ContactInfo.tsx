type ContactInfoProps = {
  employee: {
    contact: {
      address: string;
      city: string;
      state: string;
      country: string;
    };
  };
};

export default function ContactInfo({
  employee,
}: ContactInfoProps) {
  return (
    <section className="mb-6">
      <h2 className="mb-5 text-2xl font-semibold">
        Contact Information
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">
            Address
          </p>

          <p className="font-medium">
            {employee.contact.address}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            City
          </p>

          <p className="font-medium">
            {employee.contact.city}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            State
          </p>

          <p className="font-medium">
            {employee.contact.state}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Country
          </p>

          <p className="font-medium">
            {employee.contact.country}
          </p>
        </div>
      </div>
    </section>
  );
}