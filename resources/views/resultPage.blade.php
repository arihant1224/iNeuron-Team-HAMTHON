@extends('layouts.app')

@section('content')
<div id="result-page"></div>
<script>
    var probability = '{{base64_encode(json_encode($probability))}}';
    probability = JSON.parse(atob(probability));

    var tagName = '{{base64_encode(json_encode($tagName))}}';
    tagName = JSON.parse(atob(tagName));

    var imageArr = '{{base64_encode(json_encode($imageArr))}}';
    imageArr = JSON.parse(atob(imageArr));

    var imageTag = '{{base64_encode(json_encode($imageTag))}}';
    imageTag = JSON.parse(atob(imageTag));
</script>
@endsection