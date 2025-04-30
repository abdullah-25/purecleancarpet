"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import emailjs from "@emailjs/browser"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Initialize EmailJS with your public key
    emailjs.init("fUPd4OELkFpW37_K-")

    // Send the email using EmailJS
    emailjs
      .sendForm(
        "service_aqu8k6f", // Replace with your EmailJS service ID
        "template_6zhignc", // Your EmailJS template ID from the screenshot
        formRef.current,
        "fUPd4OELkFpW37_K-", // Your public key
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text)
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      })
      .catch((error) => {
        console.error("Error sending email:", error)
        setIsSubmitting(false)
        setError("There was an error sending your message. Please try again or contact us directly.")
      })
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="rounded-full bg-green-100 p-4 text-green-600 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground mt-3 max-w-md">
          Your message has been received. We'll get back to you shortly.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}
      <div className="grid gap-3">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your name" value={formState.name} onChange={handleChange} required />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your phone number"
          value={formState.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="service">Service Needed</Label>
        <Select name="service" value={formState.service} onValueChange={handleServiceChange} required>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="carpet">Carpet Cleaning</SelectItem>
            <SelectItem value="rug">Rug Cleaning</SelectItem>
            <SelectItem value="upholstery">Upholstery Cleaning</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your cleaning needs"
          value={formState.message}
          onChange={handleChange}
          required
          className="min-h-[120px]"
        />
      </div>
      <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
