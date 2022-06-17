# Background info

.prettierignore - stops prettier from changing this readme file

netlify.toml - to show all sites on netlify

# Write the following in the terminal at the begining of the project

npm i - to install everything in package.json

npm run dev - to start the project on localhost

ctrl + c - to stop the project

# How to install different things

## Font awesome icons

npm i --save @fortawesome/fontawesome-svg-core 

npm i --save @fortawesome/free-solid-svg-icons

npm i --save @fortawesome/react-fontawesome

### Using font awesome icons

```javascript
import { FaAngleUp } from "react-icons/fa";

<FaAngleDown />
```

#### Some of the options

```javascript
<FaAngleDown />
<FaAngleUp />
<GiHamburgerMenu/>
<BsEmojiSmile/>
```

[link to a million other options](https://react-icons.github.io/react-icons/icons?name=fa)


## Loading icons

npm i react-loading-icons

### Using Loading icons

```javascript
import LoadingIcons from "react-loading-icons";

<LoadingIcons.ThreeDots/>
```

#### Options

```javascript
<LoadingIcons.Audio />
<LoadingIcons.BallTriangle />
<LoadingIcons.Bars />
<LoadingIcons.Circles />
<LoadingIcons.Grid />
<LoadingIcons.Hearts />
<LoadingIcons.Oval />
<LoadingIcons.Puff />
<LoadingIcons.Rings />
<LoadingIcons.SpinningCircles />
<LoadingIcons.TailSpin />
<LoadingIcons.ThreeDots />
```

## PropTypes

npm i prop-types

### Using PropTypes

```javascript
ComponentName.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // An array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // An object with property values of a certain type
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: PropTypes.func.isRequired,

  // A required value of any data type
  requiredAny: PropTypes.any.isRequired,
}
```

## Routes

npm i react-router-dom

### Using routes

```javascript
// this goes in the main.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// this goes inside the render 
// the app route goes around all others, that way everything on the App component gets shown no matter what site you are on
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="site" element={<SomeComponent />}></Route>
        <Route path="anotherSite" element={<SomeOtherComponent />}></Route>
      </Route>
      <Route
        // default for when the link is wrong
        // like this http://localhost:3000/hjklhjklh
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>There's nothing here!</h1>
            <p>
              <a href="/">To go back click here!</a>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>

//this goes in the App.jsx
import { Outlet, Link } from "react-router-dom";

//this goes inside the render 
<nav>
    <Link to="/site">
        Site 
    </Link>
    <Link to="/anotherSite">
        Another site 
    </Link>
</nav>
<Outlet />
```

[I'm a reference-style link](#routes)




