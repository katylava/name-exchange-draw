# Name Exchange Draw

Given a list of names, randomly select one name for another that is not:
* The same person who has that person (no direct exchange)
* In the list of exclusions for that name

Exclusions are usually partners or any name that would result in the same match
as the previous year.

## About this code

It works by selecting a random name given the constraints above, and going
through the list until everyone has a name. Sometimes due to the random nature,
there may be no names left for a person (all the names left are in that
person's exlusion list). When that happens it starts over. So, it could get
caught in an infinite loop if there are no possible solutions.

This is a prototype I wrote in Pythonista, so the names (changed to protect the
innocent) are hard-coded. Intention is to port this to Javascript and do a
little app. When I do that I need to make sure it can't loop forever!

## Ideas to detect no possible solutions

* Generate all possible solutions then choose a random solution.
* Record the attempts and check the record so the same attempt is not made
  twice.

I'm not sure, but I think the number of possible solutions is the factorial of
the number of names (minus exclusions). So, that could be a lot.
