'use client'; // This tells Next.js that this is a client-side component

import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs' // Client helper for Supabase

const Nav = () => {
  const router = useRouter();
  const supabase = createClientComponentClient(); // Use client-side supabase instance

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push('/login'); // Redirect after logout
    }
  };

  return (
    
      <button onClick={handleSignOut}>
        Sign Out
      </button>
    
  );
}

export default Nav;
