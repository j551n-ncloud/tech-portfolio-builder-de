
import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";

const ADHDStory = () => {
  useEffect(() => {
    // Set document title
    document.title = "The Life of NJ | Johannes Nguyen";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="relative">
        {/* Decorative elements */}
        <div className="hidden md:block absolute top-20 right-10 w-64 h-64 bg-tech-500/5 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute bottom-40 left-10 w-72 h-72 bg-tech-600/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto prose prose-stone dark:prose-invert">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">The Life of NJ</h1>
              <h2 className="text-2xl md:text-3xl mb-8 text-tech-600 dark:text-tech-400">Growing Up with ADHD as a Child of Vietnamese Immigrants in Germany</h2>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">Small Introduction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Life can be a complex journey, and for someone with ADHD, the path is often filled with unique challenges and triumphs. This manuscript explores my life, growing up with ADHD as the oldest child of Vietnamese immigrants in Germany, and the various experiences that have shaped who I am today.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">Inspiration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My inspiration to share my story comes from the desire to help others understand ADHD and the cultural nuances of being raised in a Vietnamese immigrant family in Germany. Through my journey, I hope to shed light on the realities of living with ADHD and provide solace to those who may feel alone in their struggles.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">My Life Since Birth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I was born in Germany to hardworking Vietnamese parents who migrated to provide a better future for their family. My father, who was in an arranged marriage with my mother, fell in love with her later. As the oldest of four siblings, I was always the social kid in the family. 
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Initially introverted, I eventually became more outgoing. Early on, doctors suspected I had autism, but a psychiatrist later diagnosed me with ADHD. Additionally, I have a hearing aid and a speech disability, which added to my challenges.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">Life as an ADHD Person: Positive and Negative Aspects</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Living with ADHD has its highs and lows. On the positive side, it has given me boundless creativity and a unique perspective on life. However, it also brings difficulties like disorganization, impulsivity, and struggles with focus. Balancing these aspects has been a lifelong journey.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I was a hopeless romantic and a people-pleaser, often finding myself deeply affected by the smallest acts of love. Focusing on being happier and less clingy to others has been a significant part of my growth.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">Medication Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My journey with medication has been a rollercoaster. Initially, the idea of medication was daunting, but over time, I discovered how it could help manage my symptoms. I've experienced both the benefits and side effects, learning to navigate life with and without medical assistance. Since July, I've combined medication with habit training, finding it to be an effective combination.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.7s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">Relationships with People: Examples</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Relationships can be particularly challenging with ADHD. I've often found myself misinterpreting social cues or becoming overly enthusiastic, which sometimes leads to misunderstandings. However, I've also formed deep, meaningful connections with those who appreciate my unique energy and perspective.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  My role as the social kid in my family often meant bridging cultural gaps and helping my siblings navigate similar challenges. The dynamic with my father was complex; he was kind in our early years but often scolded, hit, and gaslighted us. Over time, I understood that his behavior was influenced by cultural differences and the immense pressure to provide for his extended family.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.8s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">Being in Love</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Love, for someone with ADHD, is intense and passionate but can also be fraught with challenges. My experiences in love have been a mix of deep emotional connections and difficulties in maintaining consistency and focus in relationships.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I experienced significant emotional trauma from past relationships, especially in 2022, which led to a breaking point where I contemplated suicide. Understanding the impact on my family helped me find the strength to keep fighting. My first significant lesson came from a girl who seemed kind and cute, but I realized she loved the attention I gave her, not me as a person.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.9s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">Rejection Sensitivity Dysphoria: Experience with and without Medication</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rejection Sensitivity Dysphoria (RSD) has been one of the most challenging aspects of my ADHD. The intense emotional pain from perceived rejection can be overwhelming. With medication, I've found some relief, but it's an ongoing battle to manage these feelings and not let them dictate my self-worth.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  RSD was particularly painful because I was often emotionally hurt and abused, making me question why the world was so cruel. Despite this, I always wished for a peaceful and happy life.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "1s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">Education Journey: Special Disability School to College</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Growing up, I attended a special disability school due to my speech disability and hearing impairment. I always wanted to be in a regular school, but my path was different. For college, I attended a disability boarding school, which provided a supportive environment for my unique needs and helped me achieve my academic goals.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  From 2017 to 2021, I was in an apprenticeship as a car mechanic. Despite learning a lot, I faced doubts, amplified by my supervisor's suggestion that I was better suited for IT. This period was challenging, but it fueled my determination to prove myself.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "1.1s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">Family Dynamics and Personal Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Due to the challenges with my father, we had many talks and meetings with social services about transferring me to a group home, but I resisted. Over time, I managed to change him and understand why he was the way he was. He struggled with his emotions and the pressure to provide for his family. Through our conversations, I learned to forgive and build a better relationship with him.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "1.2s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">Overcoming Adversity: Training and Self-Improvement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  After the breakup in 2022, I started training. Initially, it was painful, but it helped me regain my sense of self and provided an outlet for my emotions. Despite experiencing PTSD and panic attacks, I realized my consciousness was working through past trauma, and I needed to keep fighting.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  From 2012 to May 2024, I focused on self-improvement and habit therapy without ADHD medication. Training became a cornerstone of my journey, helping me face challenges and never give up.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Focusing on being happier and less clingy to others has been a significant part of my growth. I know life is hard and filled with struggles, but I believe I am here to help people who are in darkness and fight alongside them. Sometimes I forget about myself in this mission, but I strive to inspire others to fight and look forward.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-fade-up" style={{ animationDelay: "1.3s" }}>
                <h3 className="font-bold text-xl mb-4 text-tech-700 dark:text-tech-500">Current Reflections and Future Aspirations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As I approach my 24th birthday in August, I reflect on my progress and look forward to the future. I don't have a driver's license or a partner to love without holding back, but I am happy with the progress I've made. My dream of having a family and giving them love is still alive. I have lost many dreams, but this one remains my guiding light. Writing this manuscript is part of my journey, and while I don't know how it will end, I am committed to sharing my story and continuing to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ADHDStory;
