"""BajajScienceCentre URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('format/', views.format),


    path('', views.redirectHome),
    path('Home/', views.home),

    path('NoticeBoard/', views.noticeBoard),
    path('NoticeBoard/triviaForm', views.triviaForm),
    path('NoticeBoard/trivia', views.addTrivia),
    path('NoticeBoard/', views.noticeBoard),
    path('DeleteNotice/<int:noticeID>', views.deleteNotice),
    path('AddNoticeForm/', views.addNoticeForm),
    path('AddNotice/', views.addNotice),


    path('Laboratories/', views.laboratories),
    path('Laboratories/physics', views.physics),
    path('Laboratories/chemistry', views.chemistry),
    path('Laboratories/biology', views.biology),
    path('Laboratories/mathematics', views.mathematics),
    path('Laboratories/computers', views.computers),
    path('Laboratories/astronomy', views.astronomy),
    path('Laboratories/library', views.library),
    path('Laboratories/auditorium', views.auditorium),


    path('Programs/', views.programs),
    path('Programs/science', views.science),
    path('Programs/regular', views.regular),
    path('Programs/scholars', views.scholars),
    path('Programs/summerBatch', views.summerBatch),
    path('Programs/summerWorkshop', views.summerWorkshop),
    path('Programs/math', views.math),
    path('Programs/youngScientist', views.youngScientist),
    path('Programs/quiz', views.quiz),
    path('Programs/others', views.others),


    path('StudentSection/', views.studentSection),
    path('StudentSection/acheivements', views.acheivements),

    path('StudentSection/simulations', views.simulations),
    path('StudentSection/simulations/template', views.simTemplate),
    path('StudentSection/simulations/bouncingBalls', views.bouncingBalls),
    path('StudentSection/simulations/pendulum', views.pendulum),
    path('StudentSection/simulations/spring', views.spring),
    path('StudentSection/simulations/gravity', views.gravity),
    path('StudentSection/simulations/idealGasLaws', views.idealGasLaws),
    path('StudentSection/simulations/goldFoilExperiment', views.goldFoilExperiment),

    path('StudentSection/crossword', views.crossword),
    path('StudentSection/coralReef', views.coralReef),

    path('StudentSection/standard5', views.standard5),
    path('StudentSection/standard6', views.standard6),
    path('StudentSection/standard7', views.standard7),
    path('StudentSection/standard8', views.standard8),
    path('StudentSection/standard9', views.standard9),
    path('StudentSection/standard10', views.standard10),


    path('Gallery/', views.gallery),


    path('AboutUs/', views.aboutUs),
    path('AboutUs/ourPhilosophy', views.philosophy),
    path('AboutUs/management', views.management),
    path('AboutUs/visitingFaculty', views.visitingFaculty),
    path('DeleteFaculty/<int:facultyID>', views.deleteFaculty),
    path('AddFacultyForm/', views.addFacultyForm),
    path('AddFaculty/', views.addFaculty),
    path('AboutUs/contactUs', views.contactUs),

    path('SocialMedia', views.socialMedia),


    path('login/', views.Login),
    path('login/authenticate/', views.Authenticate),
    path('logout/', views.Logout),


    path('manageWebsite/', views.ManageWebsite),
]
