import { Link } from '@react-email/link';

export default function Profiles({
    linkedinurl,
    githuburl,
  }: {
    linkedinurl: string;
    githuburl: string;
  }) {
    return (
      <div>
        <div className="font-montserrat text-sm py-2">
            <div className="px-6"> 
                LinkedIn: <Link href={`https://www.${linkedinurl}`}>{linkedinurl}</Link>
            </div>
            <div className="px-6"> 
                Github: <Link href={`https://www.${githuburl}`}>{githuburl}</Link>
            </div>
        </div>
      </div>
    );
  }