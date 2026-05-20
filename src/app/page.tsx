"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Lumière Bistro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "sparkles-gradient",
      }}
      logoText="Lumière Bistro"
      description="Experience the perfect blend of culinary artistry and modern elegance. Join us for an unforgettable dining experience."
      buttons={[
        {
          text: "Reserve a Table",
          href: "#contact",
        },
        {
          text: "View Menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/elegant-dessert-with-ice-cream-flowers-blue-plate_23-2151973733.jpg"
      imageAlt="Lumière Bistro dining experience"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="A Legacy of Flavor"
      description="At Lumière Bistro, we honor traditional culinary techniques while embracing seasonal, locally sourced ingredients to create dishes that tell a story."
      bulletPoints={[
        {
          title: "Farm-to-Table",
          description: "We source ingredients from local partners to ensure peak freshness.",
        },
        {
          title: "Expert Chefs",
          description: "Our team brings years of refined skill to every plate.",
        },
        {
          title: "Elegant Ambiance",
          description: "Relax in a space designed for intimacy and comfort.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/african-american-chef-adding-fresh-herbs-leaves-plated-dish_482257-124442.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Herb Crusted Steak",
          price: "$34",
          variant: "Main",
          imageSrc: "http://img.b2bpic.net/free-photo/raw-fresh-tuna-fish-meat-salad-with-avocado-mango_1203-9044.jpg",
        },
        {
          id: "2",
          name: "Lemon Zest Seafood Pasta",
          price: "$28",
          variant: "Main",
          imageSrc: "http://img.b2bpic.net/free-photo/food-closeup-dish-red-lunch_1203-5869.jpg",
        },
        {
          id: "3",
          name: "Dark Chocolate Ganache",
          price: "$14",
          variant: "Dessert",
          imageSrc: "http://img.b2bpic.net/free-photo/portioned-cheesecake-topped-with-berries-jam_140725-5056.jpg",
        },
        {
          id: "4",
          name: "Heirloom Beet Salad",
          price: "$16",
          variant: "Appetizer",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-tomatoes-black-board_114579-3429.jpg",
        },
        {
          id: "5",
          name: "Wild Mushroom Risotto",
          price: "$26",
          variant: "Main",
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-risotto-meal-rustic-wooden-table-generated-by-ai_188544-22765.jpg",
        },
        {
          id: "6",
          name: "Artisan Bread Basket",
          price: "$8",
          variant: "Appetizer",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-mexican-sweetness_23-2149666289.jpg",
        },
      ]}
      title="Seasonal Signature Menu"
      description="Explore our curated selections crafted daily."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="The atmosphere is unmatched and every dish is a work of art. My favorite place in town for special occasions."
      rating={5}
      author="Sarah Miller"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-pretty-waitress_1098-15705.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-disposable-coffee-cup_107420-12314.jpg",
          alt: "Michael",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-kids-table_23-2149213368.jpg",
          alt: "Emily",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-young-handsome-man-isolated_273609-35974.jpg",
          alt: "David",
        },
        {
          src: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081870.jpg",
          alt: "Jessica",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15,000+",
          description: "Happy Guests Served",
        },
        {
          id: "m2",
          value: "24",
          description: "Local Farm Partners",
        },
        {
          id: "m3",
          value: "50+",
          description: "Unique Menu Items",
        },
      ]}
      title="By The Numbers"
      description="The impact we have made on the local dining scene since our doors opened."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        {
          id: "t1",
          name: "Marcus Thorne",
          role: "Head Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/chef-working-together-professional-kitchen_23-2149727956.jpg",
        },
        {
          id: "t2",
          name: "Elena Vance",
          role: "Sommelier",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-restaurant-waiter-wearing-professional-uniform-apron_482257-122142.jpg",
        },
        {
          id: "t3",
          name: "Jonathan Reed",
          role: "Restaurant Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-businesswoman-using-sign-language_23-2148740301.jpg",
        },
      ]}
      title="Meet Our Culinary Team"
      description="Dedicated professionals crafting every bite with care."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you accept reservations?",
          content: "Yes, we highly recommend booking in advance through our website.",
        },
        {
          id: "f2",
          title: "Are there vegetarian options?",
          content: "We offer a wide variety of seasonal vegetarian and vegan dishes.",
        },
        {
          id: "f3",
          title: "Is there a dress code?",
          content: "We maintain a smart-casual dress code to ensure a pleasant environment.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Reservations"
      title="Book Your Experience"
      description="Secure your table at Lumière Bistro. Sign up to get exclusive booking notifications."
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-smiley-man-door_23-2149434485.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Lumière Bistro"
      copyrightText="© 2025 Lumière Bistro | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
