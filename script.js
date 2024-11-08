const startDate = new Date("2022-11-12T00:00:00");

        function updateTime() {
            const now = new Date();

            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();
            let hours = now.getHours() - startDate.getHours();

            if (hours < 0) {
                hours += 24;
                days -= 1;
            }
            if (days < 0) {
                const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
                days += prevMonth;
                months -= 1;
            }
            if (months < 0) {
                months += 12;
                years -= 1;
            }

            function pluralize(value, singular, plural) {
                return value === 1 ? `${value} ${singular}` : `${value} ${plural}`;
            }

            let timeUnits = [
                pluralize(years, "ano", "anos"),
                pluralize(months, "mês", "meses"),
                pluralize(days, "dia", "dias"),
                pluralize(hours, "hora", "horas")
            ];

            timeUnits = timeUnits.filter(unit => !unit.startsWith("0"));

            if (timeUnits.length > 1) {
                const lastUnit = timeUnits.pop();
                document.getElementById("time").innerHTML = timeUnits.join(", ") + " e " + lastUnit;
            } else {
                document.getElementById("time").innerHTML = timeUnits.join("");
            }
        }

        setInterval(updateTime, 3600000);

        updateTime();
