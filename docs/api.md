## Constants

<dl>
<dt><a href="#navbarSlice">navbarSlice</a></dt>
<dd><p>NavbarSlice Object having one reducer, toggleVisible reverse changing boolean variable
 visibility for purposes of minimizing, normal sizing left menu.</p>
</dd>
<dt><a href="#selectVisibility">selectVisibility</a> ⇒</dt>
<dd><p>select visibility state for the purpose of displaying left menu state</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#Content">Content()</a> ⇒</dt>
<dd><p>Main content component for the site, display fetched thumbnails videos and so on.
TODO display fetched thumbnails</p>
</dd>
<dt><a href="#LeftMenu">LeftMenu()</a> ⇒</dt>
<dd><p>Leftmenu Component for display that is toggled with button click( Navbar on top)</p>
</dd>
<dt><a href="#LeftMenuShow">LeftMenuShow()</a> ⇒</dt>
<dd><p>Full Menu component</p>
</dd>
<dt><a href="#LeftMenuMin">LeftMenuMin()</a> ⇒</dt>
<dd><p>Minimized Menu Component, Home, Discover, Shorts Anchor Clickable Divs with Font Awesome Icons</p>
</dd>
<dt><a href="#Navbar">Navbar()</a> ⇒</dt>
<dd><p>Top Navbar Position Fixed Component</p>
</dd>
</dl>

<a name="navbarSlice"></a>

## navbarSlice
NavbarSlice Object having one reducer, toggleVisible reverse changing boolean variable
 visibility for purposes of minimizing, normal sizing left menu.

**Kind**: global constant  
<a name="selectVisibility"></a>

## selectVisibility ⇒
select visibility state for the purpose of displaying left menu state

**Kind**: global constant  
**Returns**: navbar visibility boolean value  

| Param | Type |
| --- | --- |
| state | <code>\*</code> | 

<a name="Content"></a>

## Content() ⇒
Main content component for the site, display fetched thumbnails videos and so on.
TODO display fetched thumbnails

**Kind**: global function  
**Returns**: contentWrapper with mapped content  
<a name="LeftMenu"></a>

## LeftMenu() ⇒
Leftmenu Component for display that is toggled with button click( Navbar on top)

**Kind**: global function  
**Returns**: LeftMenu component having LMenuShow and LMenuMin components  
<a name="LeftMenuShow"></a>

## LeftMenuShow() ⇒
Full Menu component

**Kind**: global function  
**Returns**: Full Menu Clickable divs  
<a name="LeftMenuMin"></a>

## LeftMenuMin() ⇒
Minimized Menu Component, Home, Discover, Shorts Anchor Clickable Divs with Font Awesome Icons

**Kind**: global function  
**Returns**: Minimized Menu -> Clickable Divs with Font Awesome Icons  
<a name="Navbar"></a>

## Navbar() ⇒
Top Navbar Position Fixed Component

**Kind**: global function  
**Returns**: Navbar Fixed Component with Button, Searchbar and RightMenuComponent  
