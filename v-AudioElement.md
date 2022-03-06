

## HTML Audio Element


### Properties 
(not exhaustive)

- Inherits from parent element, the [HTML Media Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)

- [`.audioTracks`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/audioTracks) lists AudioTrack objects contained in the element.

- [`.controller`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controller) MediaController object that represents the media controller assigned to the element, or null if none is assigned.

- [`.controls`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controls) Boolean that reflects the controls HTML attribute, indicating whether user interface items for controlling the resource should be displayed.

- [`.currentSrc`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentSrc) Returns a DOMString with the absolute URL of the chosen media resource.

- [`.currentTime`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime) A double-precision floating-point value indicating the current playback time in seconds; if the media has not started to play and has not been seeked, this value is the media's initial playback time. Setting this value seeks the media to the new time. The time is specified relative to the media's timeline.

- [`.duration`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/duration) A read-only double-precision floating-point value indicating the total duration of the media in seconds. If no media data is available, the returned value is NaN. If the media is of indefinite length (such as streamed live media, a WebRTC call's media, or similar), the value is +Infinity.

- [`.ended`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended) Returns a Boolean that indicates whether the media element has finished playing.

- [`.loop`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loop) A Boolean that reflects the loop HTML attribute, which indicates whether the media element should start over when it reaches the end.

- [`.muted`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/muted) Boolean whether audio is muted. True if muted.

- [`.paused`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/paused) Boolean whether media is paused.

- [`.readyState`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState) Returns a unsigned short (enumeration) indicating the readiness state of the media.

- [`.volume`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume) Is a double indicating the audio volume, from 0.0 (silent) to 1.0 (loudest).

### Methods

- [`play()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)

- [`pause`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause)

- [``]()

- [``]()

- [``]()

- [``]()

- [``]()

