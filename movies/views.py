from django.shortcuts import render

def main(request):
    return render(request, 'movies/home.html')