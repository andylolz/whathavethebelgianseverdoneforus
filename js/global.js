$(function(){
  var facts = [];
  facts.push("Provided us with safer and cheaper flights.");
  facts.push("Enabled 1.2 million students to experience different national cultures and broaden their personal horizons.");
  facts.push("Provided a single market that allows the free movement of people, goods, services and capital.");
  facts.push("Created laws protecting companies&rsquo; and individuals&rsquo; intellectual property.");
  facts.push("Introduced the European health insurance card, guaranteeing you will be cared for should you fall ill when travelling abroad.");
  facts.push("Leading the &ldquo;Kyoto&rdquo; drive to reduce the air pollution that causes global warming.");
  
  var footnotes = [];
  footnotes.push('http://www.whathaseuropedone.eu');
  
  var quips = [];
  quips.push("Big deal. What else?");
  quips.push("But what have those Europeans done for me lately?");
  quips.push("I&rsquo;m unimpressed.");
  quips.push("Am I bothered?");
  quips.push("I could do that in my sleep.");
  quips.push("That doesn't affect me personally so who cares.");
  quips.push("Yeah, AND?");
  quips.push("That's cool, I guess. What else you got?");

  var cursor = Math.floor(Math.random() * facts.length);
  var $frames = $('#frames');
  var $current, $old;
  var frame_template = $('#frame_template').html();
  
  function next_frame(){
    $old = $($current);
    
    // set up next frame
    $current = $(Mustache.render(frame_template, {
      fact: facts[cursor],
      footnote: footnotes[0],
      quip: quips[Math.floor(Math.random() * quips.length)]
    })).appendTo($frames);
    
    $old.addClass('past');
		setTimeout(function(){
			$current.removeClass('future');				
			setTimeout(function(){
			  $old.remove();
			}, 600);
		}, 200);

    cursor = (cursor == facts.length -1) ? 0 : cursor + 1;
  }
  
  $('#frames').delegate('a.quip', 'click', function(){
    next_frame();
    return false;
  });

  next_frame();
});
