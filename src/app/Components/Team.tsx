import useIsMobile from '@/Hooks/resizeHooks'
import React from 'react'
import TeamWrapper from './Wrappers/TeamWrapper'
import user1 from '../../../public/user1.png'
import user2 from '../../../public/user2.png'
import user3 from '../../../public/user3.png'
import user4 from '../../../public/user4.png'
import user5 from '../../../public/user5.png'
import user6 from '../../../public/user6.png'
export default function Team() {
  const isMobile = useIsMobile()

  return (
    <div style={{ marginTop: 60 }}>
      <div style={{ height: 'auto' }} className='w-full flex flex-col justify-between lg:flex-row lg:justify-start items-center'>
        <div
          className='flex items-center justify-center'
          style={{
            backgroundColor: '#B9FF66',
            height: isMobile ? 46 : 'auto',
            width: isMobile ? 161 : 178,
            textAlign: 'center',
            borderRadius: 7
          }}
        >
          <h1 style={{ fontSize: isMobile ? 36 : 40 }}>Team</h1>
        </div>
        <p style={{ fontSize: isMobile ? 16 : 18, marginTop: isMobile ? 30 : 0 }} className='text-center lg:text-start lg:ml-4 lg:w-1/2'>
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>
      <div className='lg:grid grid-cols-3 gap-5 pt-8'>
        <TeamWrapper
          image={user1}
          name="Jane Doe"
          title="CEO and Founder"
          experience="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        />
        <TeamWrapper
          image={user2}
          name="John Smith"
          title="Director of Operations"
          experience="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        />
        <TeamWrapper
          image={user3}
          name="Michael Brown"
          title="Senior SEO Specialist"
          experience="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
        />
        <TeamWrapper
          image={user4}
          name="Emily Johnson"
          title="PPS Manager"
          experience="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
        />
        <TeamWrapper
          image={user5}
          name="Brown Williams"
          title="Social Media Specialist"
          experience="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
        />
        <TeamWrapper
          image={user6}
          name="Sarah Kim"
          title="Content Creator"
          experience="2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"
        />
      </div>
      <div className='w-full flex justify-end'>
        <button
          className='text-white'
          style={{
            marginTop: 30,
            height: 68,
            backgroundColor: '#191A23',
            borderRadius: 14,
            fontSize: 20,
            width: isMobile ? '100%' : 264
          }}>
          See all teams
        </button>
      </div>
    </div>
  )
}
