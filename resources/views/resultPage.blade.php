@extends('layouts.app')

@section('content')
<div id="result-page"></div>
<script>
    var probability = '{{base64_encode(json_encode($probability))}}';
    probability = JSON.parse(atob(probability));

    var tagName = '{{base64_encode(json_encode($tagName))}}';
    tagName = JSON.parse(atob(tagName));
</script>
@endsection