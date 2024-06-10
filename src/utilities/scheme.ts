import React from 'react'

export interface SocialIconProps {
    href: string
    icon: any
}

export interface HeroProps {
    title: string
    description: string
    image: string
    descriptionWidth: string
}

export interface ButtonProps {
    bg: string
    color: string
    text: string
    width: string
    onClick: () => void
}

export interface ServiceCardProps {
    img: string
    title: string
    description: string
}

export interface PricingCardProps {
    price: number
    title: string
    features: string[]
    duration: string
    onClick: () => void
}

export interface ContactDetailItemProps {
    image: string
    title: string
}

export interface GalleryItemProps {
    img: string
}