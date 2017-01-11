
import '../assets/console.message/console.message';
import Migrate from './migrate';
import rules from './rules/index';

var migrate = new Migrate(rules);

migrate.check();
