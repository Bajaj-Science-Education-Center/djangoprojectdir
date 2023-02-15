from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import Context, loader
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout

from .models import *
from .Util import *

def format(request):
    context = {'Title':'Format'}
    return(render(request, 'format.html', context))

def home(request):
    context = {'Title':'Home'}
    return(render(request, 'home.html', context))

def redirectHome(request):
    return(redirect("Home/"))

def noticeBoard(request):
    context = {'Title':'Notice Board'}

    trivia = list(Trivia.objects.all())

    if(len(trivia) > 0):
        context['triviaTitle'] = trivia[0].title
        context['trivia']      = trivia[0].message

    notices = list(Notice.objects.all())

    formattedNotices = []

    for i in range (0, len(notices)):
        num = 0;
        if(i % 2 == 1):
            num = 2
        formattedNotices.append({'Notice': notices[i],
                                 'colour': num,
                                 })
    context['notices'] = formattedNotices
    return(render(request, 'noticeBoard.html', context))

@login_required(login_url='/login/')
def triviaForm(request):
    if(request.user.is_superuser):
        context = {'Title':'Trivia Form'}
        return(render(request, 'triviaForm.html', context))
    else:
        return(redirect('/login'))

@login_required(login_url='/login/')
def addTrivia(request):
    if(request.user.is_superuser):
        Trivia.objects.all().delete()
        trivia = Trivia(title=request.POST.get("title"), message=request.POST.get("message"))
        trivia.save()
        return(redirect('/NoticeBoard'))
    else:
        return(redirect('/login'))

@login_required(login_url='/login/')
def deleteNotice(request, noticeID):
    if(request.user.is_superuser):
        Notice.objects.filter(id=noticeID).delete()
        return(redirect('/NoticeBoard'))
    else:
        return(redirect('/login'))

@login_required(login_url='/login/')
def addNoticeForm(request):
    if(request.user.is_superuser):
        context = {'Title':'Add Notice Form'}
        return(render(request, 'addNoticeForm.html', context))
    else:
        return(redirect('/login'))

@login_required(login_url='/login/')
def addNotice(request):
    if(request.user.is_superuser):
        notice = Notice(title=request.POST.get("title"), message=request.POST.get("message"))
        notice.save()
        return(redirect('/NoticeBoard'))
    else:
        return(redirect('/login'))


#Laboratories
def laboratories(request):
    context = {'Title':'Laboratories'}
    return(render(request, 'laboratories.html', context))

def physics(request):
    context = {'Title':'Physics Lab'}
    return(render(request, 'Labs/physicsLab.html', context))

def chemistry(request):
    context = {'Title':'Chemistry Lab'}
    return(render(request, 'Labs/chemistryLab.html', context))

def biology(request):
    context = {'Title':'Biology Lab'}
    return(render(request, 'Labs/biologyLab.html', context))

def mathematics(request):
    context = {'Title':'Mathematics Lab'}
    return(render(request, 'Labs/mathLab.html', context))

def computers(request):
    context = {'Title':'Computer Lab'}
    return(render(request, 'Labs/computerLab.html', context))

def astronomy(request):
    context = {'Title':'Astronomy Lab'}
    return(render(request, 'Labs/astronomyLab.html', context))

def library(request):
    context = {'Title':'Multipurpose Hall'}
    return(render(request, 'library.html', context))

def auditorium(request):
    context = {'Title':'Open Air Amphitheatre'}
    return(render(request, 'auditorium.html', context))




#Programs
def programs(request):
    context = {'Title':'Programs'}
    return(render(request, 'programs.html', context))

def science(request):
    context = {'Title':'Science Practicals'}
    return(render(request, 'science.html', context))

def regular(request):
    context = {'Title':'Regular Practicals'}
    return(render(request, 'regular.html', context))

def scholars(request):
    context = {'Title':'Scholars Batch'}
    return(render(request, 'scholars.html', context))

def summerBatch(request):
    context = {'Title':'Summer Batch'}
    return(render(request, 'summerBatch.html', context))

def summerWorkshop(request):
    context = {'Title':'Summer Workshop'}
    return(render(request, 'summerWorkshop.html', context))

def math(request):
    context = {'Title':'Mathematics Workshop'}
    return(render(request, 'math.html', context))

def youngScientist(request):
    context = {'Title':'Dr. Homi Bhabha Young Scientist Exam'}
    return(render(request, 'youngScientist.html', context))

def quiz(request):
    context = {'Title':'Science and Math Quiz'}
    return(render(request, 'quiz.html', context))

def others(request):
    context = {'Title':'Other Programs'}
    return(render(request, 'others.html', context))


#Student Section
def studentSection(request):
    context = {'Title':'Student Section'}
    return(render(request, 'studentSection.html', context))

def acheivements(request):
    context = {'Title':'Acheivements'}
    return(render(request, 'acheivements.html', context))

def simulations(request):
    context = {'Title':'Simulations'}
    return(render(request, 'simulations.html', context))

def simTemplate(request):
    context = {'Title': 'Simulation Template'}
    return(render(request, 'simTemplate.html', context))
#########SIMULATIONS##########
def bouncingBalls(request):
    context = {'Title': 'Bouncing Balls Simulation'}
    return(render(request, 'Simulations/bouncingBalls.html', context))

def pendulum(request):
    context = {'Title': 'Pendulum Simulation'}
    return(render(request, 'pendulum.html', context))

def spring(request):
    context = {'Title': 'Spring Simulation'}
    return(render(request, 'spring.html', context))

def gravity(request):
    context = {'Title': 'Gravity Simulation'}
    return(render(request, 'gravity.html', context))

def idealGasLaws(request):
    context = {'Title': 'Ideal Gas Laws Simulation'}
    return(render(request, 'idealGasLaws.html', context))

def goldFoilExperiment(request):
    context = {'Title': 'Gold Foil Experiment Simulation'}
    return(render(request, 'goldFoilExperiment.html', context))

#########

@login_required(login_url='/login/')
def crossword(request):
    context = {'Title':'Crossword'}
    return(render(request, 'crossword.html', context))

@login_required(login_url='/login/')
def coralReef(request):
    context = {'Title':'Coral Reef'}
    return(render(request, 'coralReef.html', context))

@login_required(login_url='/login/')
def standard5(request):
    context = {'Title':'Standard 5'}
    return(render(request, 'standard5.html', context))

@login_required(login_url='/login/')
def standard6(request):
    context = {'Title':'Standard 6'}
    return(render(request, 'standard6.html', context))

@login_required(login_url='/login/')
def standard7(request):
    context = {'Title':'Standard 7'}
    return(render(request, 'standard7.html', context))

@login_required(login_url='/login/')
def standard8(request):
    context = {'Title':'Standard 8'}
    return(render(request, 'standard8.html', context))

@login_required(login_url='/login/')
def standard9(request):
    context = {'Title':'Standard 9'}
    return(render(request, 'standard9.html', context))

@login_required(login_url='/login/')
def standard10(request):
    context = {'Title':'Standard 10'}
    return(render(request, 'standard10.html', context))


#Gallery
def gallery(request):
    context = {'Title':'Gallery'}
    images = list(Image.objects.all())

    formattedImages = []

    for i in range(0, len(images)):
        alignment = 'left'
        if(i % 2 == 1):
            alignment = 'right'
        formattedImages.append({'Image': images[i],
                                'Alignment': alignment})
    context['images'] = formattedImages

    return(render(request, 'gallery.html', context))


#About Us
def aboutUs(request):
    context = {'Title':'About Us'}
    return(render(request, 'aboutUs.html', context))

def philosophy(request):
    context = {'Title':'Our Philosophy'}
    return(render(request, 'philosophy.html', context))

def management(request):
    context = {'Title':'Management'}
    return(render(request, 'management.html', context))

def visitingFaculty(request):
    context = {'Title':'Visiting Faculty'}

    faculty = list(VisitingFaculty.objects.all())

    formattedFaculty = []

    for i in range (0, len(faculty)):
        num = 0;
        if(i % 2 == 1):
            num = 2
        formattedFaculty.append({'Faculty': faculty[i],
                                 'colour': num,
                                 })
    context['visitingFaculty'] = formattedFaculty

    return(render(request, 'visitingFaculty.html', context))

@login_required(login_url='/login/')
def deleteFaculty(request, facultyID):
    if(request.user.is_superuser):
        VisitingFaculty.objects.filter(id=facultyID).delete()
        return(redirect('/AboutUs/visitingFaculty'))
    else:
        return(redirect('/login'))

@login_required(login_url='/login/')
def addFacultyForm(request):
    if(request.user.is_superuser):
        context = {'Title':'Add Faculty Form'}
        return(render(request, 'addFacultyForm.html', context))
    else:
        return(redirect('/login'))

@login_required(login_url='/login/')
def addFaculty(request):
    if(request.user.is_superuser):
        #util = Util()
        #print(request.FILES.get("image"))
        #file_name = util.addFacultyImage(request.FILES.get("image"), request.POST.get("name"))
        f = VisitingFaculty(name=request.POST.get("name"), description=request.POST.get("description"))
        f.save()
        return(redirect('/AboutUs/visitingFaculty'))
    else:
        return(redirect('/login'))

def contactUs(request):
    context = {'Title':'Contact Us'}
    return(render(request, 'contactUs.html', context))

def socialMedia(request):
    context = {'Title':'Social Media'}
    return(render(request, 'socialMedia.html', context))


#Login
def Login(request):
    context = {'title':'Login'}

    logout(request)

    return(render(request, 'login.html', context))

def Authenticate(request):
    context = {'title':'Authenticate'}

    username = request.POST['username']
    password = request.POST['password']

    user = authenticate(request, username = username, password = password)

    if user is not None:
        login(request, user)
        return redirect('/Home/')
    else:
        return(redirect('/login'))

def Logout(request):
    context = {'title':'Logout'}
    logout(request)

    return(redirect('/login'))


#Website Management
@login_required(login_url='/login/')
def ManageWebsite(request):
    if(request.user.is_superuser):
        context = {'Title': 'Website Management'}
        return(render(request, 'manageWebsite.html', context))
    else:
        return(redirect('/login'))
