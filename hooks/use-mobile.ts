import {
    BREAKPOINT_MOBILE_MAX,
    BREAKPOINT_TABLET_MAX
} from '../Components/layouts/MainLayout/breakpoints'
import { useEffect, useState } from 'react'

type UseMobile = () => {
    isMobile?: boolean
    isTablet?: boolean
}

export const useMobile: UseMobile = () => {
    const [isTablet, setIsTablet] = useState<boolean>()
    const [isMobile, setIsMobile] = useState<boolean>()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= BREAKPOINT_MOBILE_MAX + 1)
            setIsTablet(window.innerWidth <= BREAKPOINT_TABLET_MAX + 1)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return { isTablet, isMobile }
}
