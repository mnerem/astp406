# ASTP 406 Observational Astronomy
This repository host the lecture notes and revealjs slides for ODU's ASTP 406 course.

- [Course Syllabus](./astp406_202220/_build/html/index.html)

## Slides
These slides are made using [RevealJS](https://revealjs.com/), and html presentation tool.
- [Ch 1: Celestial Sphere and Coordinate Systems](./Ch01_Celestial_Sphere_and_Coordinate_Systems/Ch01_slides.html)
- [Ch 2: Time](./Ch02_Time/Ch02_slides.html)
- [Ch 4: Time](./Ch04_Spherical_Triangle/Ch04_slides.html)

## Lecture Notes (PDF)
The notes are made using a [graphics tablet](https://www.wacom.com/en-us/products/pen-tablets/wacom-intuos) 
and [Xournal++](https://xournalpp.github.io/), an open-source note taking software.
- [Ch 1](./Lecture_Notes/Ch01_Lecture_Notes.pdf)
- [Ch 2](./Lecture_Notes/Ch02_Lecture_Notes.pdf)
- [Ch 4](./Lecture_Notes/Ch04_Lecture_Notes.pdf)


## Example Jupyter notebook
Right click and download links
- [AstroPy_Tutorial.ipynb](AstroPy_Tutorial.ipynb) 
- [convenience_functions.py](convenience_functions.py) 
- [Lab1_Asteroid_Hunt.ipynb](Lab1_Asteroid_Hunt.ipynb)


## Steps for updating website
- Compile book by Navigating to aspt406 Directory
- `>> jupyter-book build --all astp406_202220/`
- `>> cp -r astp406_202220/_build/html/* docs/`
