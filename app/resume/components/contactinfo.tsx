import { Link } from '@react-email/link';

export default function ContactInfo({
    location,
    email,
    phone
  }: {
    location: string;
    email: string;
    phone: string;
  }) {
    return (
      <div>
        <div className="font-lato text-sm flex py-2">
            <div> 
                {location}
            </div>
            <div className="px-4"> 
                <Link href={`mailto:${email}`}>{email}</Link>
            </div>
            <div> 
                {phone}
            </div>
        </div>
      </div>
    );
  }