---
title: Embedding a YouTube Channel (not only) in AMP
date: 2019-04-27T22:00:00.000Z
image: https://cdn-images-1.medium.com/max/7442/1*odm_6RiJcA0HyUaJD7fdGg.jpeg
excerpt: This is a simple tutorial for embedding a YouTube channel into an AMP. With a small modification, this can be used for any website.
---

This is a simple tutorial for embedding a YouTube channel into an AMP. With a small modification, this can be used for any website.

I recently started a YouTube channel about JavaScript. To promote it I wanted to embed the latest video on my home page. It is easy, but it is not straightforward.

### 1. Embedding single video is easy

When you want to embed a single video, it is super easy. There is a share button which will display the HTML code. Technically it is an iframe with URL in the form youtube.com/embed/W056nRs4IS8. That W056nRs4IS8 is called video id (the part after youtube.com/watch?v=).

In AMP it is also easy, you just follow the instructions on [amp-youtube](https://amp.dev/documentation/components/amp-youtube) component documentation. You pass the video id to data-videoid attribute. It will look like this:

```html
<amp-youtube
  data-videoid="W056nRs4IS8"
  layout="responsive"
  width="480"
  height="270"
></amp-youtube>
```

Unfortunately, there is nothing for the whole channel. But there is a trick!

### 2. A playlist CAN be embedded

A little known fact–at least it was to me until a few minutes ago–is that you can embed a playlist, too. Yes, you can embed a YouTube playlist to any page. There is an [official documentation page](https://support.google.com/youtube/answer/171780?hl=en) about this.

You have the change the HTML code to a new URL, for example: youtube.com/embed/videoseries?list=PLTkA4bsrp6QSjjdjQpsScRFMgEvgJJICV. Where that long code is playlist id.

In AMP there are two tricks. First, AMP does not understand the video id, it just inserts it to the URL. So we can write videoseries instead of the id.

Second, you can pass custom params with special data-param-\* attribute. We need to add a list attribute with the playlist id.

Combined, it looks like this:

```html
<amp-youtube
  data-videoid=”videoseries”
  data-param-list=”PLTkA4bsrp6QSjjdjQpsScRFMgEvgJJICV”
  layout=”responsive”
  width=”480"
  height=”270"
></amp-youtube>
```

If only there was a playlist for the channel. Except, …

### 3. There is a playlist for the whole channel

If the previous was a little know fact, this comes to me as a true shock.

![This links to the channel playlist](https://cdn-images-1.medium.com/max/2000/1*Al85GsrJta7g1JvsS5zvEQ.png)_This links to the channel playlist_

Accidentally, I discovered that when you click on that little ‘Play all’ link on the video page, you get to a playlist video for your channel.

Then you just copy the playlist id (it look very much like channel id but is different). And use it like in the previous step.

You are done!

Unfortunately, this embed does not work on Medium. You can [check it on my home page](https://robinpokorny.com).

> Did you find it useful? Where do you promote your channel? Are there more tricks I should know? Let me know in the comments!

---

Intro photo by [Leon Bublitz](https://unsplash.com/photos/uDTzfsGJihw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).

**This article was [cross-posted to Medium](https://medium.com/@robinpokorny/embedding-a-youtube-channel-not-only-in-amp-d3fead017ed), please use discussion there.**
