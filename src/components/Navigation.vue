<template>
	<div class="Navigation">
		<div class="container">
			<aside>
				<nav class="Navigation__nav">
					<ul class="list-reset Navigation__items">
						<li class="navigation__item">
							<router-link to="/" class="Navigation__link">
								О компании
							</router-link>
						</li>
						<li class="navigation__item">
							<router-link to="/" class="Navigation__link">
								Новости
							</router-link>
						</li>
						<li class="navigation__item">
							<router-link to="/" class="Navigation__link">
								Спецпредложения
							</router-link>
						</li>
						<li class="navigation__item">
							<router-link to="/" class="Navigation__link">
								На складе
							</router-link>
						</li>
						<li class="navigation__item">
							<router-link to="/" class="Navigation__link">
								Контакты
							</router-link>
						</li>
						<li class="navigation__item">
							<router-link to="/" class="Navigation__link">
								Запасные части
							</router-link>
						</li>
						<li class="navigation__item">
							<router-link to="/" class="Navigation__link">
								Дилерство
							</router-link>
						</li>
					</ul>
				</nav>
			</aside>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.Navigation {
	padding: 20px 20px;
	background-color: #023859;
}

.Navigation__items {
	display: flex;
	justify-content: center;
	gap: 50px;
}

.Navigation__link {
	position: relative;
	font-size: 18px;
	color: aliceblue;
	transition: color 0.3s ease-in-out;
}

.Navigation__link::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -5px;
	width: 100%;
	height: 2px;
	background-color: #afafaf;
	transition: background-color 0.3s ease-in-out;
	transform: scale(0);
	transition: transform 0.3s ease-in-out;
}

.Navigation__link:hover::after {
	transform: scale(1);
}

.Navigation__link:hover {
	color: #dedcdc;
}
</style>
