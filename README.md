# sprite_less
less mixin for easy use of sprites on hdpi displays

### USAGE

Usage is very easy:
Import the mixin.less in your projects less file and use as in the example below. 

```less
@import "<path_to>/mixin.less";

.sprite1(@x, @y, @xoffset:0, @yoffset:0) {
    .sprite("<path_to>/sprite.png", 52px, 250px, 50px, @x, @y, @xoffset, @yoffset);
}

.sprite2(@x, @y, @xoffset:0, @yoffset:0) {
    .sprite("<path_to>/sprite_red.png", 52px, 250px, 50px, @x, @y, @xoffset, @yoffset);
}

.icon-1 {
    .sprite1(0, 0);
    width: 51px;
    height: 50px;
}

.icon-2 {
    .sprite2(0, 1);
    width: 51px;
    height: 50px;
}
```


### Params

#### @path
Path to Sprite File
(Attention: the Retina optimized Sprite should have the same filename with @2x added e.g. sprite@2x.png)

#### @sprite_width
Width of the Sprite Image (in px)

#### @sprite_height
Height of the Sprite Image (in px)

#### @grid_size
Size of the Grid in px (should be a square)

#### @x
x-position in grid

#### @y
y-position in grid

#### @xoffset
x-offset (in px)

#### @yoffset
y-offset (in px)


### Try it yourself
http://codepen.io/anon/pen/YGqRKK
