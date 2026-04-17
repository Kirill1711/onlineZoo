const authBlock = document.querySelector('.modal__auth');
const dashboard = document.getElementById('dashboard');
const authForm = document.querySelector('.auth-form');

function showDashboard(user) {
    if(authBlock.classList.contains('modal-active')){
        authBlock.classList.remove('modal-active');
        authBlock.classList.add('modal-unactive');
        dashboard.style.display = 'block';
        document.getElementById('userName').innerText = user.name;
        document.body.style.overflow = 'auto';
    } else {
        dashboard.style.display = 'block';
        document.getElementById('userName').innerText = user.name;
    }
}

function showAuthform () {
    authForm.style.display = 'flex';
}

function closeAuthform () {
    authForm.style.display = 'none';
}

function closeDashboard () {
    dashboard.style.display = 'none';
}

function showAuth() {
    authBlock.classList.add('modal-active');
    authBlock.classList.remove('modal-unactive');
    dashboard.style.display = 'none';
    authForm.style.display = 'flex';
}

let regMsgTimeout;

document.getElementById('regForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const agreeCheckbox = document.getElementById('agree');
  const msgReg = document.getElementById('message-reg');
  const submitBtn = document.getElementById('registred-btn');

  clearTimeout(regMsgTimeout);

  if (!agreeCheckbox.checked) {
    msgReg.textContent = 'Вы должны согласиться с условиями';
    msgReg.style.color = 'red';
    regMsgTimeout = setTimeout(() => msgReg.textContent = '', 2000);
    return;
  }

  submitBtn.disabled = true;

  try {
    const res = await fetch('/php/register.php', {
      method: 'POST',
      body: new FormData(e.target)
    });

    if (!res.ok) {
      msgReg.textContent = 'Ошибка сервера';
      msgReg.style.color = 'red';
      return;
    }

    const data = await res.json();
    msgReg.textContent = data.message || 'Готово';
    msgReg.style.color = data.success ? 'green' : 'red';
  } catch (err) {
    msgReg.textContent = 'Ошибка сети, попробуйте позже';
    msgReg.style.color = 'red';
  } finally {
    submitBtn.disabled = false;
    regMsgTimeout = setTimeout(() => msgReg.textContent = '', 2000);
  }
});

document.getElementById('authForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const msgAuth = document.getElementById('message-auth');
  const submitBtn = document.getElementById('auth-btn');

  clearTimeout(regMsgTimeout);

  submitBtn.disabled = true;
  let data;

  try {
    const res = await fetch('/php/login.php', {
      method: 'POST',
      body: new FormData(e.target)
    });

    if (!res.ok) {
      msgAuth.textContent = 'Ошибка сервера';
      msgAuth.style.color = 'red';
      return;
    }

    data = await res.json();
    msgAuth.textContent = data.message || 'Готово';
    msgAuth.style.color = data.success ? 'green' : 'red';
  } catch (err) {
    msgAuth.textContent = 'Ошибка сети, попробуйте позже';
    msgAuth.style.color = 'red';
  } finally {
    submitBtn.disabled = false;
    regMsgTimeout = setTimeout(() => {
    msgAuth.textContent = '';
    if (data) {showDashboard(data)};
    closeAuthform()},
    1500);
  }
});

document.getElementById('logout').addEventListener('click', async () => {
    await fetch('/php/logout.php', {
        method: 'POST',
        credentials: 'include'
    });
    showAuth();
    closeDashboard();
});

window.addEventListener('load', async () => {
    const res = await fetch('/php/checkAuth.php', {
        credentials: 'include'
    });
    
    const data = await res.json();
    if (data.auth) {
        showDashboard(data);
        closeAuthform();
    }
});