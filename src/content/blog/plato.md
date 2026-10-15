---
title: "On Plato and Object Oriented Programming"
description: "We're bringing it back to the basics of philosophy and computer science."
pubDate: "Oct 12, 2026"
"slug": "blog/PlatoAndProgramming"
heroImage: "https://i0.wp.com/artsofthought.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-18-at-5.52.24-PM.png"
tags: ["philosophy", "computer science"]
---
## Introduction
When embarking on a new journey, I find it helpful to bring myself back to the basics in order to get my bearings. As somebody who minored in philosophy and majored in computer science, it seemed that furthering my knowledge in one field let to a better understanding of the other. In the spirit of that, I thought it would be interesting to draw parallels between two of the most basic concepts (or at least two of the most popular ones) in each field. I'm by no means an expert in Platonism or Object Oriented Programming, but I hope this exercise will be interesting nonetheless.

## Plato's Theory of Forms
Plato may be the most recognized name in all of philosophy, which I think is a well-earned accolade. The historical significance of his work aside, the theories he laid out are quite beginner-friendly and enjoyable to read. I think this is the reason his work is studied in many introductory philosophy classes. If you've taken one of those classes, or perhaps if you've spent enough time around people who have, you've probably heard of Plato's <a href="/public/The_Allegory_of_the_Cave.pdf" target="_blank">Allegory of the Cave</a>. This text gives us a glimpse into what is known as the *Theory of Forms*.

The Theory of Forms, or Platonic Idealism, is the a branch of metaphysical thinking which posits that there are general (or abstract) underlying definitions for all things, and that this prototypical form *is* what we mean when we talk about the thing. 

To use an example that I once overheard coworkers discussing: what is soup? If you were tasked with describing what a soup is, how would you approach this? You may find that no matter how generic your definition is, you'd be able to find notable exceptions. For example, you may be tempted to provide some generic definition, such as the following:
> A soup is a savory liquid food that is served hot and contains bits of solid ingredients. 

One exception that may immediately come to mind is gazpacho, which is served cold. We might amend our definition as follows:

> A soup is a savory liquid food that may be served hot ***or cold*** and contains bits of solid ingredients.

Another exception could be made at this point. How do we account for soups that don't contain bits of solid ingredients, such as tomato soup? We could always amend our definition again:

> A soup is a savory liquid food that may be served hot or cold and ***may*** contain bits of solid ingredients ***or be homogenous***.

Now I fear we're getting a little off the beaten path. With this definition, one could argue (as one of my coworkers did) that coffee is a soup, or that a can of V8 (not sponsored btw) is a soup. I was even able to get one or two of my peers to agree that cereal is a soup. Thankfully we weren't the ones tasked with defining what a soup is. If you're curious, the folks at Merriam-Webster define soup as the following:

> A liquid food especially with a meat, fish, or vegetable stock as a base and often containing pieces of solid food

So it seems that we got pretty close, but perhaps the folks at Merriam-Webster would be obliged to agree that V8 is a soup, and perhaps they wouldn't have much issue with that.

Plato might settle the soup debate by saying that there are many particular instances of soup, but the *concept* of Soup itself is a distinct thing that sits above these instantiations. This *thing* that sits above the gazpacho and the tomato soup and the chicken-noodle soup is thus the Form of soup itself. In other words, the Form is the essence of the thing, which by definition sits outside of our perception. We perceive the savory taste, the filling nature, and the heat of the dish, but those perceptions aren't what makes it a soup. Rather, these perceptions are just byproducts of us perceiving the *metaphysical* object of soup through our *physical* senses. 

Alright, that's enough about soup... let's do some spelunking.

### Plato's Allegory of the Cave
As referenced above, the allegory of the cave is a tool that Plato uses to further illustrate this concept of Forms. In this story, Socrates is talking to Glaucon, possibly the biggest yes-man in ancient history. Socrates, using the typical socratic method of *elenchus*, lays out a scenario about prisoners who are chained from birth in a dark cave with only a view of the cave wall. Behind them, there is large bonfire burning, so that anything that passes between the prisoners and the fire casts a shadow on the cave wall. 

As people pass between the bonfire and the prisoners, the things they carry will cast a shadow on the wall. If a prisoner saw the shadow of a large dog that occasionally walks by the fire, they would come to recognize the distinct shape of the shadow and refer to it much like how we refer to actual dogs. In other words, for the prisoners who only know the shadows, the dog-shaped shadow *is* the dog itself. 

We the readers know that the dog's shadow is only a representation of the actual third dimensional being we know as a dog. We know that the shadow is some secondary thing, caused only by the light of the fire being blocked by the *actual* dog. Now imagine, if you will, that the dog in the story (along with any other dog you've seen in your life) are all just imperfect instances of the form Dog.

Just as the prisoners see the shadows as reality, since it's all they can practically see, we see the external world as our reality because it's all that we can practically see. Above this external world sits the world of Forms, which is metaphysical, or outside our perception. Plato saw the great work of philosophers as venturing into that metaphysical world and reporting their findings.

---

## Object Oriented Programming
I can hear the question now, "what does some dead guy's theories have to do with computer programming?" The answer is that the very basics of Object Oriented Programming are steeped in a similar logic as the Platonic Theory of Forms. For those in the know (or those who are good at reading titles), you may have guessed that I'm talking about the concept of *Object Oriented Programming*. For the rest of you, don't worry -- I'll explain further. 

In coding, we developers try our best to not needlessly repeat ourselves. It saves time to not have to start from the ground up any time you want to get your code to do something, especially if it's a thing you need to do many times over. As Carl Sagan said, "If you wish to make an apple pie from scratch, you must first invent the universe." We're not really into that kind of worldbuilding. 

One way we can save time is to group things that have the same properties or functions into their own Class. This way, whenever we want to do something with the code, we can make use of the Class to organize and structure our code in an easily recognizeable way.

Let's go back to the example of a dog. Dogs come in many breeds, but there are some generalizations we can make about them. For starters, they will mostly all have 4 legs, a tail, and fur. These are the *properties* of a dog. Then there are things that a dog can do, such as eat and bark. These are the *functions* of a dog. Below is a very simplified Dog class that I've left pretty bare-bones for the purposes of this demonstration.

```c#
public class Dog {
    private int numLegs;
    private string tailLength;
    private string name;
    private string breed;
    private string furColor;
    private Date birthDate;

    // This is the "constructor" it does the work of instantiating our dog object
    public Dog(string breed, 
               Date birthDate,
               string furLength,
               string furColor,
               string tailLength) {
        numLegs = 4; // In this perfect digital world of mine, no dog is born with the wrong number of legs
        this.breed = breed;
        this.birthDate = birthDate;
        this.furLength = furLength;
        this.furColor = furColor;
        this.tailLength = tailLength; 
    }

    // You can pretty much call dogs whatever you want, so there's no real need to validate the input here.
    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        Date today = new Date();
        return today.Year - this.birthDate.Year;
    }

    // If you know, you know.
    public int getAgeDogYears(){
        return getAge() * 7;
    }

    public void Speak() {
        Console.WriteLine("Bark");
    }

    // TODO: Add more tricks ;-)
}
```

This dog class is an abstract definition for what a dog is. That is, what properties a dog has and what actions a dog can do. Here's an example of what it might look like to bring a dog into this digital world.

```c#
Date birthDate = new Date(1919, 6, 1);

Dog myFavDog = new Dog(breed:"Husky", birthDate:birthDate, furLength:"Long", furColor:"Brown", tailLength:"Long");

myFavDog.setName("Balto");
```

Presto, we have a digital version of the dog I was obsessed with as a child! The great part is you can use those 3 lines to birth and name any number of dogs. 

## Tying These Concepts Together
In the above example, the variable `myFavDog` is an *object* of the type `Dog`. Let's take it back to Plato for a second. You can think of the `Dog` class as the Form, and the `myFavDog` object as an instance of that form. 

In other words, the `myFavDog` object is the shadow in Plato's cave, and the `Dog` class is the thing the shadow represents. 

To take it a step further, the `myFavDog` object is the dog you have sitting in your lap as you read this, and the `Dog` class is the form of a dog, roughly the essence of what a dog is, unobscured by the veil of our human perceptions.

Now, there's a lot more to both subjects than I'm able to fully encapsulate in a blog post, but I think this similarity is striking. To my knowledge, the [invention of object oriented programming](https://medium.com/javascript-scene/the-forgotten-history-of-oop-88d71b9b2d9f) didn't stem from some direct engagement with Plato's work, and we can safely assume the [theory of forms](https://daily-philosophy.com/platos-theory-of-forms/) wasn't influenced by modern software conventions, due to our understanding of time.

I do, however, think that we computer scientists are doing more philosophy than we realize when we try to tackle hard problems with code. There's more overlap between computer science and philosophy than boolean logic (though this overlap did make my college studies much easier). 

The beauty of computer science is shown when we look inwardly and dare to see the world through a philosopher's eyes. With the ubiquity of LLMs and generated code, my sincerest hope is that we don't lose this human element along the way.
