import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services = [
    {
      title: 'Emotional Support Specialist',
      description: 'One-on-one support to help you cope with life’s emotional challenges in a safe space.'
    },
    {
      title: 'Mental Health Coach',
      description: 'Personalized strategies to improve mental wellness, reduce stress, and build resilience.'
    },
    {
      title: 'Active Listener',
      description: 'Sometimes all you need is someone who truly listens. No judgment, just presence.'
    },
    {
      title: 'Peer Support',
      description: 'Talk to someone who understands — real support from shared life experience.'
    },
    {
      title: 'Therapeutic Support',
      description: 'Gentle, informal therapeutic support rooted in empathy and emotional validation.'
    },
    {
      title: 'Mindfulness & Relaxation',
      description: 'Guided breathing, grounding, and relaxation techniques to ease anxiety.'
    },
    {
      title: 'Self-Esteem Building',
      description: 'Build confidence through supportive conversations and positive reinforcement.'
    },
    {
      title: 'Relationship Guidance',
      description: 'Helping you navigate emotional struggles in romantic, family, or social connections.'
    },
    {
      title: 'Life Coaching & Clarity',
      description: 'Helping you find direction and purpose with gentle guidance.'
    }
  ];

  generateWhatsAppLink(serviceTitle: string): string {
    const base = 'https://wa.me/918302433506';
    const msg = `Hi! I am interested in your "${serviceTitle}" service. Could you please tell me more?`;
    return `${base}?text=${encodeURIComponent(msg)}`;
  }

}
