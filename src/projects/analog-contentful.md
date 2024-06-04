---
title: Analog.JS & contentful
stack: FE & CMS
slug: analog-contentful
tags: ["Analog.JS", "CMS", "Angular"] 
summary: The Analog.JS app can dynamically specify what components to render based on componenet data from Contentful
thumb: ../images/thumbs/projectImageTwo.jpg
featuredImg: ../images/featured/projectImageTwo.jpg
---

## Dynamic component rendering in analog.JS with contentful

> [Analog.JS](https://analogjs.org) - the fullstack meta-framework for Angular. 
>
> [Contentful](https://www.contentful.com) - a cloud-based headless Content Management System (CMS) that allows to manage and deliver content to various digital platforms.
<br>

The Analog.JS app created, can dynamically specify what components to render based on data from Contentful.
The web page's structure is dynamically defined based on component data from Contentful and it's rendered at runtime.
This gives ability for content authors to pick components and change the layout of a page without dev support.
<br>

### Create Content Model in Contentful

Create content types for all the dynamic components in Contentful and fetch them to the front-end using Contentful delivery API. This is the diagram of the content model.

<br>
<img src="https://github.com/AngelMathew/analogContentfulDynamic/assets/30999892/56441482-13a0-4ace-9440-5c8b1ad6deed" alt="Content Model" width="100%"  margin=".5em 0">
<br>
<br>

### Define and configure the components in FE
Components that are dynamically loaded need to be predefined and configured in FE. `contentful.service.ts` handles the data from Contentful,and then its imported to the `server.ts` file, so data is fetched from server before loading the page. And then map the content models defined in Contentful to components in FE

```
const _dynamicComponentMap: 
    ComponentMap = {
        mainHero: {
            loadComponent: () => 
                MainHeroComponent,
        },
        header: {
            loadComponent: () => 
                HeaderComponent,
        },
        footer: {
            loadComponent: () => 
                FooterComponent,
        },
};
```
<br>
<br>

### Build components in FE to display the content
Finally build the components to display the content fom CMS.

<img src="https://github.com/AngelMathew/analogContentfulDynamic/assets/30999892/fbd4d206-4526-4f8f-8823-d14a487a110f" alt="Content Model" width="100%">
<br>
<br>

Source code
```
https://github.com/AngelMathew/analogContentfulDynamic.git
```


