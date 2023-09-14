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
        <div className="font-lato text-md flex py-2">
            <div> 
                {location}
            </div>
            <div className="px-6"> 
                <Link href={`mailto:${email}`}>{email}</Link>
            </div>
            <div> 
                {phone}
            </div>
        </div>
      </div>
    );
  }