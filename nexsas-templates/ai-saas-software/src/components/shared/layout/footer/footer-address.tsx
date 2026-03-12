const FooterAddress = ({
  address,
  contact,
}: {
  address: { label: string; text: string };
  contact: { label: string; phone: string; phoneHref: string; email: string; emailHref: string };
}) => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-tagline-2 text-background-11 mb-1 font-semibold">{address.label}</p>
        <p className="text-tagline-3 font-normal text-white/50">{address.text}</p>
      </div>
      <div>
        <p className="text-tagline-2 text-background-11 mb-1 font-semibold">{contact.label}</p>
        <a
          href={contact.phoneHref}
          className="text-tagline-3 block font-normal text-white/50 hover:underline"
        >
          {contact.phone}
        </a>
        <a
          href={contact.emailHref}
          className="text-tagline-3 block font-normal text-white/50 hover:underline"
        >
          {contact.email}
        </a>
      </div>
    </div>
  );
};

export default FooterAddress;
