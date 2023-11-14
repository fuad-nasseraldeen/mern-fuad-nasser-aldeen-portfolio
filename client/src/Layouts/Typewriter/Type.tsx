import React from 'react'
import Typewriter from 'typewriter-effect'

import { Profile, RootState } from 'Layouts/types.tsx'
import { useSelector } from 'react-redux';

const _Typewriter: React.FC = () => {
  const profile: Profile = useSelector((state: RootState) => state.profile);
  const { role } = profile
  return (
    <Typewriter
      options={{
        strings: role?.map((roleString) => roleString),
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default _Typewriter
