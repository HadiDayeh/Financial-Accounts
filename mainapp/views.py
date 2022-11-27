from django.urls import reverse
from django.shortcuts import redirect
from django.shortcuts import render
from .models import Accounts


def login(request):
    return render(request, "login.html")


def accounts(request):
    context = {
        'accounts': Accounts.objects.all()
    }
    return render(request, "accounts.html", context)


def new_account(request):
    return render(request, "new-account.html")


def edit_account(request, id):
    context = {
        'acc': Accounts.objects.get(id=id)
    }
    return render(request, "edit-account.html", context)


def insert(request):
    if request.method == 'POST':
        title = request.POST['title']
        balance = request.POST['balance'].replace(",", "")
        currency = request.POST['currency']
        acc = Accounts(title=title, balance=balance, currency=currency)
        acc.save()
    return redirect("accounts")


def update(request, id):
    if request.method == 'POST':
        title = request.POST['title']
        acc = Accounts.objects.get(id=id)
        acc.title = title
        acc.save()
    return redirect("accounts")


def delete(request, id):
    acc = Accounts.objects.get(id=id)
    acc.delete()
    return redirect("accounts")


def transactions(request):
    return render(request, "transactions.html")


def new_transaction(request):
    return render(request, "new-transaction.html")
