'use client'

export const dynamic = 'force-dynamic';

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/utils/supabase'
import BaseLayout from '@/components/layout/BaseLayout'
import { Lock, Mail, KeyRound, Shield } from 'lucide-react'
import Header from '@/components/layout/Header'
import { Suspense } from 'react'
import SignInForm from '@/components/auth/SignInForm'

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BaseLayout>
        <Header />
        <SignInForm />
      </BaseLayout>
    </Suspense>
  )
} 