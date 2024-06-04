---
title: Choropleth map using D3.JS
stack: React & D3
slug: choropleth-map
tags: ["React.JS", "D3.JS"] 
summary: A Choropleth map is a map that encodes data using colour of a region. Map shows the development status per country

thumb: ../images/thumbs/projectImageThree.jpg
featuredImg: ../images/featured/projectImageThree.jpg
---

## Choropleth map using D3.JS

> [D3.JS](https://d3-graph-gallery.com/graph/choropleth_hover_effect.html) - An open source JS library for Data Visualization

<br>

A Choropleth map is a map that encodes data using colour of a region.It is a a simple vector map using SVG <path> elements to represent countries and cities. Here D3.JS is used to create the visual representation of the map. The Map shows the development status per country and data comes from here `https://gist.githubusercontent.com/AngelMathew/cba118c19f4956c8b9cde568fae6e517/raw/map.json`. 
<br>

### Create a react app and install d3.js

`npm install d3`
<br>
<br>

### Render world map
To render world map geographical data is needed, in the form of `GeoJSON` or `TopoJSON`

GeoJSON : A JSON based format to interchange geographic data.Due to high precision can’t stream for web

TopoJSON : An extension of geoJSON, contains geospatial data and attribute data.

<img src="https://github.com/AngelMathew/choroplethMap/assets/30999892/8c6e91f7-cc49-4d7a-910f-bce6f9d18598" alt="world map" width="100%">

<br>
<br>

### Projection functions and geographic path generators
What kind of projection is needed to visualize data on the page has to be specified, the one used in the code is `geoMercator` which is like a flat projection.
Geographic Path Generators generates an SVG path data with a given feature object.

`https://github.com/d3/d3-geo-projection`


<img src="https://github.com/AngelMathew/choroplethMap/assets/30999892/3f8520e6-b983-473b-92e6-14c850702904" alt="world map" width="100%">
<br>
<br>

Source code
```
https://github.com/AngelMathew/choroplethMap.git
```


