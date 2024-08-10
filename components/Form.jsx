'use client';

// Ui
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// Icons
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type='name' id='name' placeholder='Name' />
        <User size={20} className="absolute right-6" />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type='email' id='email' placeholder='Email' />
        <MailIcon size={20} className="absolute right-6" />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Textarea placeholder='Type Your Message Here.' />
        <MessageSquare size={20} className="absolute top-4 right-6" />
      </div>

      <Button className='flex items-center gap-x-1 max-w-[166px]'>
        Let&rsquo;s Talk 
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
}

export default Form;