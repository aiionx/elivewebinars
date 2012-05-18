var results = [];

$.getJSON('http://search.twitter.com/search.json?q=elivewebinars&rpp=15&callback=?', fromTwitter);



function fromTwitter(data) {
  results = data['results'];
  for(var i = 0; i < results.length; i++){
    $('#tweets').append('<li><b>' + results[i]['from_user_name'] + ':</b> ' + results[i]['text'] +'</li>');
  }
}
