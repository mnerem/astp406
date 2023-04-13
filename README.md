# ASTP 406 Observational Astronomy
This repository host the lecture notes and revealjs slides for ODU's ASTP 406 course.

- [Course Syllabus](./astp406_202220/_build/html/index.html)

## Course Materials

| Lecture Notes | Lecture Slides |
|---------------|----------------|
| [Ch 1](./Ch01_Celestial_Sphere_and_Coordinate_Systems/Ch01_Lecture_Notes.pdf) | [Celestial Sphere and Coordinate Systems](./Ch01_Celestial_Sphere_and_Coordinate_Systems/Ch01_slides.html) |
| [Ch 2](./Ch02_Time/Ch02_Lecture_Notes.pdf) | [Time](./Ch02_Time/Ch02_slides.html) |
| [Ch 4](./Ch04_Spherical_Triangle/Ch04_Lecture_Notes.pdf) | [Spherical Triangles](./Ch04_Spherical_Triangle/Ch04_slides.html) |
| [Ch 5](./Ch05_Quantify_Light/Ch05_Reading_Notes.pdf) | [Quantify Light](./Ch05_Quantify_Light/Ch05_slides.html) |
| [Ch 6](./Ch06_Optical_Telescopes/Ch06_Optical_Telescopes/Ch06_Lecture_Notes.pdf) | [Optical Telescopes](./Ch06_Optical_Telescopes/Ch06_slides.html) |




## Example Jupyter notebook
Right click and download links
- [AstroPy_Tutorial.ipynb](AstroPy_Tutorial.ipynb) 
- [convenience_functions.py](convenience_functions.py) 
- [Lab1_Asteroid_Hunt.ipynb](Lab1_Asteroid_Hunt.ipynb)


## Steps for updating website
- Compile book by Navigating to aspt406 Directory
- `>> jupyter-book build --all astp406_202220/`
- `>> cp -r astp406_202220/_build/html/* docs/`
