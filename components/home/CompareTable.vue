<template>
	<div class="table-container">
		<table>
			<thead>
				<tr>
					<th>Критерий</th>
					<th>Использование VPN-ключей</th>
					<th>Готовое приложение с вшитыми ключами</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td data-label="Критерий">Безопасность</td>
					<td data-label="VPN-ключи" class="positive">
						<div class="content">
							<TableGreenCheck /> Максимальный контроль, так как ключи не передаются третьим лицам.
						</div>
					</td>
					<td data-label="Приложение" class="negative">
						<div class="content">
							<TableRedCross /> Возможны встроенные трекеры или сбор данных.
						</div>
					</td>
				</tr>
				<tr>
					<td data-label="Критерий">Анонимность</td>
					<td data-label="VPN-ключи" class="positive">
						<div class="content">
							<TableGreenCheck />

							Полная анонимность, ключи можно менять вручную.
						</div>
					</td>
					<td data-label="Приложение" class="negative">
						<div class="content">
							<TableRedCross /> Иногда требуется регистрация, что снижает уровень анонимности.
						</div>
					</td>
				</tr>
				<tr>
					<td data-label="Критерий">Гибкость</td>
					<td data-label="VPN-ключи" class="positive">
						<div class="content">
							<TableGreenCheck />
							Можно использовать на любых устройствах, включая роутеры.
						</div>
					</td>
					<td data-label="Приложение" class="negative">
						<div class="content">
							<TableRedCross />
							Ограничение по устройствам и платформам.
						</div>
					</td>
				</tr>
				<tr>
					<td data-label="Критерий">Настройка</td>
					<td data-label="VPN-ключи" class="negative">
						<div class="content">
							<TableRedCross />
							Требует ручной настройки, что может быть сложно для новичков.
						</div>
					</td>
					<td data-label="Приложение" class="positive">
						<div class="content">
							<TableGreenCheck />
							Подключение в один клик.
						</div>
					</td>
				</tr>
				<tr>
					<td data-label="Критерий">Скорость</td>
					<td data-label="VPN-ключи" class="positive">
						<div class="content">
							<TableGreenCheck />
							Можно выбрать любой сервер и протокол для оптимальной скорости.
						</div>
					</td>
					<td data-label="Приложение" class="negative">
						<div class="content">
							<TableRedCross />
							Приложения используют фиксированные сервера с ограниченной скоростью.
						</div>
					</td>
				</tr>
				<tr>
					<td data-label="Критерий">Обход блокировок</td>
					<td data-label="VPN-ключи" class="positive">
						<div class="content">
							<TableGreenCheck />
							Возможность смены серверов и протоколов при необходимости.
						</div>
					</td>
					<td data-label="Приложение" class="negative">
						<div class="content">
							<TableRedCross />
							Приложения могут блокироваться провайдерами.
						</div>
					</td>
				</tr>
				<tr>
					<td data-label="Критерий">Обновление</td>
					<td data-label="VPN-ключи" class="negative">
						<div class="content">
							<TableRedCross />
							Требуется вручную заменять ключи при их истечении.
						</div>
					</td>
					<td data-label="Приложение" class="positive">
						<div class="content">
							<TableGreenCheck /> Автоматическое обновление ключей и серверов.
						</div>
					</td>
				</tr>
				<tr>
					<td data-label="Критерий">Прозрачность</td>
					<td data-label="VPN-ключи" class="positive">
						<div class="content">
							<TableGreenCheck />
							Полный контроль за настройками и протоколами.
						</div>
					</td>
					<td data-label="Приложение" class="negative">
						<div class="content">
							<TableRedCross />
							Неизвестно, какие технологии и сервера реально используются.
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.table-container {
	overflow-x: auto;

	@include big-mobile {
		display: none;
	}
}
table {
	width: 100%;
	border-collapse: collapse;
	min-width: 700px;
	font-family: 'Tilda-Sans';
}
th,
td {
	border: 1px solid $white;
	padding: 0.75rem;
	vertical-align: top;
	text-align: center;
}
th {
	background-color: #26272c;
	color: white;
	width: 33.3333%;
	font-size: 20px;
	line-height: 1.5;
	font-weight: 600;

	&:first-child {
		border-top-left-radius: 16px;
	}

	&:last-child {
		border-top-right-radius: 16px;
	}
}
td {
	&:nth-child(1) {
		font-weight: bold;
		background-color: #ececec;
		font-size: 20px;
		line-height: 1.5;
		font-weight: 600;
	}
}
tr {
	&:last-child {
		td {
			&:first-child {
				border-bottom-left-radius: 16px;
			}

			&:last-child {
				border-bottom-right-radius: 16px;
			}
		}
	}
}
.positive {
	background-color: rgba(146, 174, 114, 0.2);
	color: #26272c;
	text-align: left;
	padding: 15px 46px;
}

.negative {
	background-color: #f2dcdc;
	color: #26272c;
	text-align: left;
	padding: 15px 46px;
}

.content {
	display: flex;
	align-items: start;
	column-gap: 12px;
	justify-content: center;
}
</style>
